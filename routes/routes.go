package routes

import "github.com/gin-gonic/gin"

var router = gin.Default()

func Router() {
	UserRouter()
	err := router.Run(":8081")
	if err != nil {
		return
	}
}