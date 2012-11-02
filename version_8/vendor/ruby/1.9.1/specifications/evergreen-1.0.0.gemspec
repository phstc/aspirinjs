# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "evergreen"
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jonas Nicklas"]
  s.date = "2011-11-02"
  s.description = "Run Jasmine JavaScript unit tests, integrate them into Ruby applications."
  s.email = ["jonas.nicklas@gmail.com"]
  s.executables = ["evergreen"]
  s.extra_rdoc_files = ["README.rdoc"]
  s.files = ["bin/evergreen", "README.rdoc"]
  s.homepage = "http://github.com/jnicklas/evergreen"
  s.rdoc_options = ["--main", "README.rdoc"]
  s.require_paths = ["lib"]
  s.rubyforge_project = "evergreen"
  s.rubygems_version = "1.8.24"
  s.summary = "Run Jasmine JavaScript unit tests, integrate them into Ruby applications."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<capybara>, ["~> 1.0"])
      s.add_runtime_dependency(%q<launchy>, [">= 0"])
      s.add_runtime_dependency(%q<sinatra>, ["~> 1.1"])
      s.add_runtime_dependency(%q<json_pure>, [">= 0"])
      s.add_runtime_dependency(%q<coffee-script>, [">= 0"])
      s.add_development_dependency(%q<rspec>, ["~> 2.0"])
      s.add_development_dependency(%q<capybara-webkit>, [">= 1.0.0.beta4"])
      s.add_development_dependency(%q<therubyracer>, ["~> 0.9"])
    else
      s.add_dependency(%q<capybara>, ["~> 1.0"])
      s.add_dependency(%q<launchy>, [">= 0"])
      s.add_dependency(%q<sinatra>, ["~> 1.1"])
      s.add_dependency(%q<json_pure>, [">= 0"])
      s.add_dependency(%q<coffee-script>, [">= 0"])
      s.add_dependency(%q<rspec>, ["~> 2.0"])
      s.add_dependency(%q<capybara-webkit>, [">= 1.0.0.beta4"])
      s.add_dependency(%q<therubyracer>, ["~> 0.9"])
    end
  else
    s.add_dependency(%q<capybara>, ["~> 1.0"])
    s.add_dependency(%q<launchy>, [">= 0"])
    s.add_dependency(%q<sinatra>, ["~> 1.1"])
    s.add_dependency(%q<json_pure>, [">= 0"])
    s.add_dependency(%q<coffee-script>, [">= 0"])
    s.add_dependency(%q<rspec>, ["~> 2.0"])
    s.add_dependency(%q<capybara-webkit>, [">= 1.0.0.beta4"])
    s.add_dependency(%q<therubyracer>, ["~> 0.9"])
  end
end
