from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select
from typing import List, Optional
from .database import engine, create_db_and_tables, get_session
from .models import Product, Order, OrderItem # - Order aur OrderItem import karna zaroori hai
from sqlalchemy.orm import selectinload # - Yeh line bilkul top par add karein

app = FastAPI(title="SnapShop API 💎")

# CORS setup for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

# --- PRODUCT ENDPOINTS ---

@app.get("/api/products", response_model=List[Product])
def read_products(category: Optional[str] = None, session: Session = Depends(get_session)):
    statement = select(Product)
    if category:
        statement = statement.where(Product.category == category)
    return session.exec(statement).all()

@app.get("/api/products/{product_id}", response_model=Product)
def read_product(product_id: int, session: Session = Depends(get_session)):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.get("/api/search", response_model=List[Product])
def search_products(q: str, session: Session = Depends(get_session)):
    statement = select(Product).where(
        (Product.name.contains(q)) | (Product.category.contains(q))
    )
    return session.exec(statement).all()

# --- ORDER ENDPOINTS ---

# 1. Create Order (Checkout ke liye zaroori)
@app.post("/api/orders")
def place_order(order_data: dict, session: Session = Depends(get_session)):
    try:
        # Main Order save karna
        new_order = Order(
            customer_name=order_data["name"],
            customer_email=order_data["email"],
            total_amount=order_data["total"]
        )
        session.add(new_order)
        session.commit()
        session.refresh(new_order)

        # Order ki items save karna
        for item in order_data["items"]:
            order_item = OrderItem(
                order_id=new_order.id,
                product_id=item["id"],
                product_name=item["name"],
                quantity=item["quantity"],
                price=item["price"]
            )
            session.add(order_item)
        
        session.commit()
        return {"message": "Success", "order_id": new_order.id}
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=400, detail=str(e))

# 2. Get All Orders (Admin View ke liye)

@app.get("/api/orders", response_model=List[Order])
def get_all_orders(session: Session = Depends(get_session)):
    # Use selectinload to fetch the items relationship for each order
    statement = select(Order).options(selectinload(Order.items))
    results = session.exec(statement).all()
    return results

# 3. Get Single Order
@app.get("/api/orders/{order_id}", response_model=Order)
def get_single_order(order_id: int, session: Session = Depends(get_session)):
    order = session.get(Order, order_id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order