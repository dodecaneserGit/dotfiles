
import sys
import pygame

from settings import Settings
from ship import Ship

def run_game():
    # Inicializacion de juego y crea objeto
    pygame.init()
    ai_settings = Settings()
    screen = pygame.display.set_mode((ai_settings.screen_width,
                                      ai_settings.screen_height))
    pygame.display.set_caption("Alien Invasion")

    # Dibuja la nave
    ship = Ship(screen)

    # Inicio bucle juego
    while True:

        # Visualizar eventos de teclado y raton.
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                sys.exit()
        # Repintar pantalla
        bg_color = (230,230,230)
        screen.fill(ai_settings.bg_color)
        ship.blitme()

        # Pantalla mas reciente visible
        pygame.display.flip()

run_game() 