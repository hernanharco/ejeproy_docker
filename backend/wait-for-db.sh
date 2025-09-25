import os
import time
import MySQLdb
import subprocess

host = os.getenv("DATABASE_HOST", "db")
port = int(os.getenv("DATABASE_PORT", "3306"))
user = os.getenv("DATABASE_USER", "root")
password = os.getenv("DATABASE_PASSWORD", "")
database = os.getenv("DATABASE_NAME", "")

print(f"⏳ Esperando a MySQL en {host}:{port} (user: {user}, db: {database})...")

while True:
    try:
        conn = MySQLdb.connect(
            host=host,
            port=port,
            user=user,
            passwd=password,
            db=database
        )
        conn.close()
        print("✅ MySQL está listo!")
        break
    except Exception as e:
        print(f"⏳ MySQL no disponible - reintentando en 2s (error: {e})")
        time.sleep(2)

# Ejecutar servidor de Django
subprocess.run(["python", "manage.py", "runserver", "0.0.0.0:8000"])
