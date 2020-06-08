class DcComicsController < ApplicationController
    def index
        dc_comics = DcComic.all
        render json: dc_comics, include: [:user]
    end
end
