from pydantic import BaseModel
from typing import Optional

class ProductBase(BaseModel):
    name: str
    price: float
    image: str
    category: str
    description: Optional[str] = None

class Product(ProductBase):
    id: int

    class Config:
        orm_mode = True