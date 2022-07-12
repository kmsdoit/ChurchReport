package User

import (
	"log"

	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context){
	if err := c.BindJSON(&churchUser); err != nil{
		log.Fatal(err)	
	}
	result := dbConn.Find(&churchUser, "email = ?",churchUser.Email)
	
	if result.RowsAffected != 0 {
		c.JSON(400, gin.H{
			"status" : 400,
			"message" : "이미 존재하는 이메일 입니다",
		})
		return
	}

	churchUser.Password = GenerateHashPassword(churchUser.Password)
	
	if err := dbConn.Create(&churchUser); err.Error != nil {
		c.JSON(400, gin.H{
			"status":  400,
			"message": "register is fail"})
		return
	}

	c.JSON(200, gin.H{
		"status" : 200,
		"message" : "회원가입 성공",
	})
}