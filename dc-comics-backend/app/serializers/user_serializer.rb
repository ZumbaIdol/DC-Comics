class UserSerializer < ActiveModel::Serializer
    attributes :id, :name
    has_many :dc_comics
end