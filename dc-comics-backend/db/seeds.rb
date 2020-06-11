# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'securerandom'

User.delete_all
DcComic.delete_all

users_name = [
    'David',
    'Greg',
    'Hakim',
    'Aaron',
    'Theresa',
    'Deb',
    'Jared'
  ]
   
  user_collection = []

  users_name.each do |name|
    user_collection << User.create(name: name)
  end

  user_collection.each do |user|
    collection_size = (SecureRandom.random_number(5) + 1).floor

    (1..collection_size).each do |comic|
        name = Faker::DcComics.name
        title = Faker::DcComics.title
        hero = Faker::DcComics.hero
        heroine = Faker::DcComics.heroine
        villain = Faker::DcComics.villain

        DcComic.create(title: title, hero: hero, heroine: heroine, villain: villain, user_id: user.id)
      end
    end