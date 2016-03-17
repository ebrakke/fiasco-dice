Vagrant.configure(2) do |config|

  	config.vm.box = "ubuntu/trusty64"
  	config.vm.provision :shell, path: "bootstrap.sh"

  	config.vm.network "forwarded_port", guest: 9000, host: 9000
  	config.vm.network "forwarded_port", guest: 35729, host: 35729

  	config.vm.provider "virtualbox" do |v|
    	v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
	end
end
