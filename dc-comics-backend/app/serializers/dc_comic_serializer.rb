class DcComicSerializer < ActiveModel::Serializer
    attributes :id, :title, :hero, :heroine, :villain, :user_id
    belongs_to :user
end