#!/usr/bin/env ruby
require "rubygems"

env  = ENV['RACK_ENV'].to_sym
root = File.expand_path(File.dirname(__FILE__))

if env == :production
  require "aerial"
  #require File.join(File.dirname('/Users/matt/Workspace/aerial/'), "aerial", "lib", "aerial.rb")
  require 'rack/contrib'
  require 'rack-rewrite'
  use Rack::StaticCache, :urls => ['/images','/stylesheets','/favicon.ico'], :root => "public"
  #use Rack::ETag
  use Rack::Rewrite do
    rewrite '/', '/site/index.html'
    rewrite %r{^(.*)\.css}, '/site/$1.css'
    rewrite %r{^(.*)}, '/site/$1.html'
  end
else
  require File.join(File.dirname('/Users/matt/Workspace/aerial/'), "aerial", "lib", "aerial.rb")
end

Aerial::App.set :environment, ENV["RACK_ENV"] || :development
Aerial::App.set :root, root
Aerial.new(root, "/config/config.yml") # Load configuration and initialize Aerial

# You probably don't want to edit anything below
disable :run
run Aerial::App
