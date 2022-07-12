package routes

import (
	User "church/services/user"
)


func UserRouter() {
	userApi := router.Group("/api/user")
	{
		userApi.POST("/register",User.Register)
		userApi.POST("/login", User.Login)
		
	}
}
