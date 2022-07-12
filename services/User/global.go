package User

import (
	models "church/model"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

var dbConn *gorm.DB
var churchUser models.ChurchUser

func SetDB(db *gorm.DB){
	dbConn = db
	dbConn.AutoMigrate(&churchUser)
}

func GenerateHashPassword(password string) string {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return ""
	}
	return string(hash)
}

func ComparePassword(hash, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	if err != nil {
		if err == bcrypt.ErrMismatchedHashAndPassword {
			return false
		}
		return false
	}

	return true
}