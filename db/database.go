package db

import (
	"fmt"
	"log"
	"os"

	user "church/services/user"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

func GetConnectionSetting() *gorm.DB {

	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	user := os.Getenv("DBUSER")
	password := os.Getenv("PASSWORD")
	dbname := os.Getenv("DBNAME")

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := gorm.Open("postgres", psqlInfo)

	if err != nil {
		log.Println(psqlInfo)
		panic("failed to connect database")
	}

	log.Println("DB Connection established...")
	return db
}

func DBConnection() {
	var db = GetConnectionSetting()
	user.SetDB(db)
}
