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
        SELECT race, element FROM races;
        """)
    races = cursor.fetchall()
    return races


@database_common.connection_handler
def get_classes(cursor):
    cursor.execute("""
        SELECT main_class FROM main_classes
        """)
    classes = cursor.fetchall()
    return classes
