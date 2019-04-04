import database_common


@database_common.connection_handler
def get_characters_name(cursor):
    cursor.execute("""
        SELECT character_name FROM characters;
        """)
    characters = cursor.fetchall()
    return characters


@database_common.connection_handler
def create_character(cursor, character_name):
    cursor.execute("""
        INSERT INTO characters(character_name)
        VALUES(%(character_name)s;
        """, {'character_name': character_name})


@database_common.connection_handler
def get_races(cursor):
    cursor.execute("""
        SELECT * FROM races
        ORDER BY id;
        """)
    races = cursor.fetchall()
    return races


@database_common.connection_handler
def get_main_classes(cursor):
    cursor.execute("""
        SELECT * FROM main_classes
        ORDER BY id;
        """)
    classes = cursor.fetchall()
    return classes


@database_common.connection_handler
def get_sub_classes(cursor):
    cursor.execute("""
        SELECT * FROM sub_classes
        ORDER BY id;
        """)
    classes = cursor.fetchall()
    return classes


@database_common.connection_handler
def get_final_classes(cursor):
    cursor.execute("""
        SELECT * FROM final_classes
        ORDER BY id;
        """)
    classes = cursor.fetchall()
    return classes


races = get_races()
main_classes = [{'id': 1, 'name': 'warrior', 'strength': '4', 'intellect': '0', 'dexterity': '0'},
                {'id': 2, 'name': 'mage', 'strength': '0', 'intellect': '4', 'dexterity': '0'},
                {'id': 3, 'name': 'rouge', 'strength': '0', 'intellect': '0', 'dexterity': '4'}]
sub_classes = [{'id': 6, 'name': 'hunter', 'strength': '2', 'intellect': '0', 'dexterity': '2'},
               {'id': 1, 'name': 'soldier', 'strength': '4', 'intellect': '0', 'dexterity': '0'},
               {'id': 2, 'name': 'mageknight', 'strength': '2', 'intellect': '2', 'dexterity': '0'}]
final_classes = [{'id': 10, 'name': 'fortune hunter', 'strength': '1', 'intellect': '0', 'dexterity': '3'},
                 {'id': 11, 'name': 'assassin', 'strength': '2', 'intellect': '0', 'dexterity': '2'},
                 {'id': 12, 'name': 'renegade', 'strength': '3', 'intellect': '0', 'dexterity': '1'}]

selector_lists = [
    ['SELECT RACE', 'race-selector', 'race-selector-option', 'race-selectables', races],
    ['SELECT MAIN CLASS', 'main-class-selector', 'main-class-selector-option', 'main-class-selectables', main_classes],
    ['SELECT SUB CLASS', 'sub-class-selector', 'sub-class-selector-option', 'sub-class-selectables', sub_classes],
    ['SELECT FINAL CLASS', 'final-class-selector', 'final-class-selector-option', 'final-class-selectables', final_classes]
]
