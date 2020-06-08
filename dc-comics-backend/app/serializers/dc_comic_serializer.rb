class DcComicSerializer < ActiveModel::Serializer
    attributes :id, :name, :title, :hero, :heroine, :villain, :user_id
    belongs_to :user
end