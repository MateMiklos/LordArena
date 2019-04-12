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
        VALUES (%(character_name)s);
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


@database_common.connection_handler
def get_main_class_abilities_by_main_class_name(cursor, class_name):
    cursor.execute("""
        SELECT main_class_abilities.name, main_class_abilities.ability FROM main_class_abilities
        JOIN main_classes ON main_class_abilities.main_class_id = main_classes.id
        WHERE main_classes.name = %(class_name)s
        """, {'class_name': class_name})
    abilities = cursor.fetchall()
    return abilities


@database_common.connection_handler
def get_sub_classes_by_main_class_name(cursor, class_name):
    cursor.execute("""
        SELECT sub_classes.* FROM sub_classes
        JOIN main_sub_ids ON sub_classes.id = main_sub_ids.sub_class_id
        JOIN main_classes ON main_sub_ids.main_class_id = main_classes.id
        WHERE main_classes.name = %(class_name)s
        ORDER BY sub_classes.id;
        """, {'class_name': class_name})
    classes = cursor.fetchall()
    return classes


@database_common.connection_handler
def get_final_classes_by_sub_class_name(cursor, class_name):
    cursor.execute("""
        SELECT final_classes.* FROM final_classes
        JOIN sub_final_ids ON final_classes.id = sub_final_ids.final_class_id
        JOIN sub_classes ON sub_final_ids.sub_class_id = sub_classes.id
        WHERE sub_classes.name = %(class_name)s
        ORDER BY final_classes.id;
        """, {'class_name': class_name})
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
