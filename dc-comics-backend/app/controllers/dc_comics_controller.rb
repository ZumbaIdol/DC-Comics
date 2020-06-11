class DcComicsController < ApplicationController
    def index
        dc_comics = DcComic.all
        render json: dc_comics, include: [:user]
    end

    def show
        dc_comic = DcComic.find_by(id: params[:id])
        render json: dc_comic, include: [:user]
    end

    def create
        user = User.find_by_id(params['userId'])
        title = Faker::DcComics.title
        hero = Faker::DcComics.hero
        heroine = Faker::DcComics.heroine
        villain = Faker::DcComics.villain
        dc_comic = user.dc_comics.build(title: title, hero: hero, heroine: heroine, villain: villain)
        if dc_comic.save
            render json: dc_comic
        else
            render json: dc_comic, status: 500
        end
    end

    def destroy
        comic = DcComic.find_by(id: params[:id])
        comic.destroy
        render json: comic
    end
end
