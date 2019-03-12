from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route('/')
def route_index():
    return render_template('index.html')


@app.route('/game')
def route_game():
    return render_template('game.html')


def main():
    app.run(
        debug=True,
        port=5000
    )


if __name__ == "__main__":
    app.run()
