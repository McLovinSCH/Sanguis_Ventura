import sqlite3
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# --- RUTAS PARA SERVIR PÁGINAS WEB (FRONTEND) ---

@app.route('/')
def index():
    return render_template('index.html')

# --- PUNTO DE ENTRADA ---
if __name__ == '__main__':
    # host='0.0.0.0' permite accesos en la red local (Intranet)
    app.run(host='0.0.0.0', port=5000, debug=True)