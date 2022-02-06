class BreweryImporter
  require 'csv'

  def self.execute
    new.execute
  end

  def execute
    import_brewery
  end

  private

  def import_brewery
    saved_names = Brewery.pluck(:name)
    file_path = Rails.root.join('db/seeds/brewery/brewery.csv')
    csv = CSV.read(file_path, headers: true)

    breweries = csv.map do |row|
      next if saved_names.include?(row['name'])

      {
        name: row['name']
      }
    end

    breweries.compact!

    Brewery.import(breweries)
  end
end
