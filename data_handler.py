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
