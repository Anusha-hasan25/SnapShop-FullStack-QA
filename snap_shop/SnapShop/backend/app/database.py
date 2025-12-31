from sqlmodel import create_engine, Session, SQLModel

sqlite_file_name = "snapshop.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

# check_same_thread=False SQLite ke liye zaroori hai
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session