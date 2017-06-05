class CreateExamples < ActiveRecord::Migration[5.0]
  def change
    create_table :examples do |t|
      t.string :string_variable
      t.integer :number_variable

      t.timestamps
    end
  end
end
