require 'rails_helper'

RSpec.describe BreweryImporter, type: :model do
  describe '#execute' do
    subject { importer.execute }

    let(:importer) { BreweryImporter.new }

    context 'when seed CSV file has empty rows' do
      before do
        allow(CSV).to receive(:read).and_return(CSV::Table.new([]))
      end

      it 'does not insert brewery' do
        expect { subject }.not_to change(Brewery, :count)
      end
    end

    context 'when seed CSV file has rows' do
      it { expect { subject }.to change(Brewery, :count).from(0) }
    end

    context 'when call #execute more than twice' do
      it 'insert data only once' do
        expect { importer.execute }.to change(Brewery, :count).from(0)
        expect { importer.execute }.not_to change(Brewery, :count)
      end
    end
  end
end
