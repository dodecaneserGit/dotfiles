import sys
import pygame

def run_game():
    # Inicializamos el juego y creamos un objeto pantalla
    pygame.init()
    screen = pygame.display.set_mode((1200, 800))
    pygame.display.set_caption("Alien Invasion")
    
    # Comezamos el bucle principal
    while True:
        # Ver los eventos de teclado y raton
        for event in pygame.event.get():
            