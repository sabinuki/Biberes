class BeerStyleImporter
  require 'csv'

  def self.execute
    new.execute
  end

  def execute
    import_style_class
    import_style
  end

  private

  def import_style_class
    saved_names = BeerStyleClass.pluck(:name)
    file_path = Rails.root.join('db/seeds/beer_style/style_class.csv')
    csv = CSV.read(file_path, headers: true)

    style_classes = csv.map do |row|
      next if saved_names.include?(row['name'])

      {
        name: row['name']
      }
    end

    style_classes.compact!

    BeerStyleClass.import(style_classes)
  end

  def import_style
    saved_names = BeerStyle.pluck(:name)
    saved_classes = BeerStyleClass.pluck(:id, :name).to_h

    return if saved_classes.blank?

    file_path = Rails.root.join('db/seeds/beer_style/style.csv')

    csv = CSV.read(file_path, headers: true)
    style = csv.map do |row|
      next if saved_names.include?(row['name'])

      {
        name: row['name'],
        beer_style_class_id: saved_classes.key(row['class'])
      }
    end

    style.compact!

    BeerStyle.import(style)
  end
end
