# Vagrant Setup

**Dependencies**:

- [Vagrant](https://www.vagrantup.com)
- [Virtualbox](https://www.virtualbox.org)
- [RubyGems](https://rubygems.org/)

**Two-Step Setup**: (replace `PROJECTDIR` with the bolt-vagrant directory)

- `cd PROJECTDIR/vagrant`
- `vagrant up --provision`

Make sure you are in the "vagrant" subdirectory whenever you execute any `vagrant` commands. Or alternatively, set 
the `VAGRANT_CWD` environment variable to "vagrant".

# Next Steps

If the vagrant box ever goes down (restart, system update, etc.) just do a `vagrant up`.
SSH access is a simple `vagrant ssh` away.

# Documentation

- [docs.bolt.cm](https://docs.bolt.cm/)
- [docs.vagrantup.com](https://docs.vagrantup.com/v2/)
