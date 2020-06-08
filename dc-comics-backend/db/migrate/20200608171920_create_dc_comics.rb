class CreateDcComics < ActiveRecord::Migration[6.0]
  def change
    create_table :dc_comics do |t|
      t.string :name
      t.string :title
      t.string :hero
      t.string :heroine
      t.string :villain
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
