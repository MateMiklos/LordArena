from flask import Flask, render_template, redirect, url_for, jsonify
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
    selector_lists = data_handler.selector_lists
    return render_template('character-creation.html', selector_lists=selector_lists)


@app.route('/sub-classes/<class_name>')
def route_sub_classes(class_name):
    sub_classes = data_handler.get_sub_classes_by_main_class_name(class_name)
    sub_classes_dict = {'sub_classes_data': sub_classes}
    return jsonify(sub_classes_dict)


@app.route('/final-classes/<class_name>')
def route_final_classes(class_name):
    final_classes = data_handler.get_final_classes_by_sub_class_name(class_name)
    final_classes_dict = {'final_classes_data': final_classes}
    return jsonify(final_classes_dict)


@app.route('/selector-data/<selected>')
def route_selector_data(selected):
    main_classes = data_handler.get_main_classes()
    main_class_abilities = data_handler.get_main_class_abilities_by_main_class_name(selected)
    sub_classes = data_handler.get_sub_classes_by_main_class_name(selected)
    final_classes = data_handler.get_final_classes_by_sub_class_name(selected)
    data = {'main_classes_data': main_classes, 'main_class_abilities': main_class_abilities,
            'sub_classes_data': sub_classes, 'final_classes_data': final_classes}
    return jsonify(data)


def main():
    app.run(
        debug=True,
        port=5000
    )


if __name__ == "__main__":
    app.run()
