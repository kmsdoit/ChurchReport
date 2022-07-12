package main

import (
	"church/db"
	"church/routes"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	go db.DBConnection()

	log.Println("Listening on Port 8081")
	routes.Router()
}