package routes

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var router = gin.Default()

func Router() {
	UserRouter()
	router.Use(cors.New(
		cors.Config{
			AllowOrigins:     []string{"http://localhost:8000"},
			AllowMethods:     []string{"POST","GET","PATCH","DELETE"},
			MaxAge: 12 * time.Hour,
	}))
	err := router.Run(":8000")
	if err != nil {
		return
	}
}