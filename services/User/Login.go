package User

import (
	"log"

	"github.com/gin-gonic/gin"
)

func Login(c *gin.Context){
	if err := c.BindJSON(&churchUser); err != nil{
		log.Fatal(err)
		c.JSON(400, gin.H{
			"status":  400,
			"message": "bad request",
		})	
		return
	}

	inputPassword := churchUser.Password

	result := dbConn.Debug().Find(&churchUser,"email = ?",churchUser.Email)

	if result.RowsAffected == 0 {
		c.JSON(400, gin.H{
			"status":  400,
			"message": "DB can't find this user email",
		})
		return
	}

	compPassword := ComparePassword(churchUser.Password,inputPassword)

	if !compPassword{
		c.JSON(401, gin.H{
			"status":  401,
			"message": "허가하지 않는 계정입니다",
		})
		return
	}

	c.JSON(200, gin.H{
		"status" : 200,
		"message" : "login success",
	})
}