from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Olá Mundo'

Youtube = {
    'titulo':'Youtube',
    'quantidadeVisualizacao':'589'
}
Kwai = {
    'titulo':'Kwai',
    'quantidadeVisualizacao':'2570'
}
Instagram = {
    'titulo':'Instagram',
    'quantidadeVisualizacao':'150'
}
TikTok = {
    'titulo':'TikTok',
    'quantidadeVisualizacao':'985'
}
Calculadora = {
    'titulo':'Youtube, TikTok, Kwai, Instagram'
}

@app.route('/api/dadosRedesSociais')
def redeSocial():
    return jsonify(Youtube,Kwai,Instagram,TikTok,Calculadora)


if __name__== '__main__':
    app.run(debug=True)