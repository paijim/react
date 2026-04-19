#!/bin/bash

echo " Lancement de la stack avec docker compose ..."

sudo docker compose down

sudo docker compose up -d

echo " Pret ! Verifie ta base maintenant. "
