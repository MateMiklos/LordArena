from flask import Flask, render_template, redirect, url_for
import data_handler


app = Flask(__name__)


@app.route('/')
def route_index():
    return render_template('index.html')


@app.route('/game')
def route_game():
    return render_template('game.html')


@app.route('/characters')
def route_characters():
    characters = data_handler.get_characters_name()
    return render_template('characters.html', characters=characters)


@app.route('/character-creation')
def route_character_creation():
    races = data_handler.get_races()
    classes = data_handler.get_classes()
    return render_template('character-creation.html', races=races, classes=classes)


def main():
    app.run(
        debug=True,
        port=5000
    )


if __name__ == "__main__":
    app.run()
