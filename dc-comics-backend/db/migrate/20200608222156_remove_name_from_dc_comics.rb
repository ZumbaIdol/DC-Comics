class RemoveNameFromDcComics < ActiveRecord::Migration[6.0]
  def change
    remove_column :dc_comics, :name, :string
  end
end
