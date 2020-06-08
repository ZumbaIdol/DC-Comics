class DcComicsController < ApplicationController
    def index
        dc_comics = DcComic.all
        render json: dc_comics, include: [:user]
    end

    def show
        dc_comic = DcComic.find_by(id: params[:id])
        render json: dc_comic, include: [:user]
    end
end
