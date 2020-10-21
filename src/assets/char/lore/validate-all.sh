for chr in ./characters/*.yml; do echo "---" && echo $chr && ./schema/validator.rb $chr ./schema/schema.yml; done
