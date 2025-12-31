from sqlmodel import Session, select
from app.database import engine, create_db_and_tables
from app.models import Product

# Jewelry Data jo humne pehle discuss kiya tha
JEWELRY_DATA = [
    {
        "name": "Solitaire Diamond Ring",
        "price": 450000.0,
        "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800",
        "category": "Diamond",
        "description": "A breathtaking 1-carat diamond set in a pure white gold band."
    },
    {
        "name": "Classic Gold Necklace",
        "price": 125000.0,
        "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
        "category": "Gold",
        "description": "Timeless 22K gold necklace featuring intricate traditional craftsmanship."
    },
    {
        "name": "Sterling Silver Bracelet",
        "price": 15000.0,
        "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
        "category": "Silver",
        "description": "Elegant sterling silver bracelet with a high-polish finish."
    },
    {
        "name": "Swarovski Style Pendant",
        "price": 35000.0,
        "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        "category": "Diamond",
        "description": "A signature piece with hand-set crystals that capture the light."
    }
]

def seed_database():
    # Tables ensure karna
    create_db_and_tables()
    
    with Session(engine) as session:
        for item in JEWELRY_DATA:
            # Check karna ke item pehle se toh nahi
            statement = select(Product).where(Product.name == item["name"])
            existing_product = session.exec(statement).first()
            
            if not existing_product:
                product = Product(**item)
                session.add(product)
        
        session.commit()
        print("✅ SnapShop Database seeded successfully!")

if __name__ == "__main__":
    seed_database()