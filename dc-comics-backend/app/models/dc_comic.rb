class DcComic < ApplicationRecord
  belongs_to :user
  validate :dc_comic_count_valid?

  private

  def dc_comic_count_valid?
    if self.user.dc_comics.length >= 5
      self.errors.add(:max_comic, "Remove some comics first")  
    end 
  end
end

