class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: [:dc_comics]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:dc_comics]
    end
end
