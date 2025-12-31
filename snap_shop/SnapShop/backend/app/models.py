from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime

# 1. Product Model (Missing earlier)
class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    price: float
    image: str
    category: str
    description: Optional[str] = None

# 2. Main Order Model
class Order(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    customer_name: str
    customer_email: str
    total_amount: float
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    # Relationship to Items
    items: List["OrderItem"] = Relationship(back_populates="order")

# 3. Individual Items in an Order
class OrderItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    order_id: Optional[int] = Field(default=None, foreign_key="order.id")
    product_id: int
    product_name: str
    quantity: int
    price: float

    # Link back to main order
    order: Optional[Order] = Relationship(back_populates="items")