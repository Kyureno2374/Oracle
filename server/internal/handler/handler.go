package handler

import (
	"encoding/json"
	"net/http"
	"oracle/server/internal/service"
)

type Handler struct {
	service *service.Service
}

func New(service *service.Service) *Handler {
	return &Handler{
		service: service,
	}
}

type HealthResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func (h *Handler) Health(w http.ResponseWriter, r *http.Request) {
	response := HealthResponse{
		Status:  "ok",
		Message: "Oracle API is running",
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}
