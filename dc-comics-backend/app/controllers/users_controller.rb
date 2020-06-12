class UsersController < ApplicationController  
    def index
        users = User.all
        render json: users, include: [:dc_comics]
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: [:dc_comics]
    end

    def create
        user = User.new(user_params)        
        if user.save            
          render json:  user, include: [:dc_comics]
        end
    end
    
      private
    
      def user_params
        params.require(:user).permit(:name)
      end
end
