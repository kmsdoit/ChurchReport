package models

import (
	"gorm.io/gorm"
)

type ChurchUser struct {
	gorm.Model
	Email           string     `gorm:"type:varchar(255)" json:"Email" binding:"required"` // 사원 메일
	Password        string     `gorm:"type:text" json:"password"`                         //비밀번호
	Name            string     `gorm:"type:text" json:"name"`                             // 이름
	Dept 			string 	   `gorm:"type:text" json:"dept"` //
}
