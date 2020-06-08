class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, include: [:dc_comics]
    end
end
