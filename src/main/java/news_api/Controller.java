package news_api;

import news_api.models.Users;
import news_api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    UserRepository userRepository;
    @RequestMapping("/register")
    public boolean register(@RequestBody Users user) {

        try {
            userRepository.save(user);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    @RequestMapping("/login")
    public boolean login(@RequestBody Users user) {

        if((userRepository.findUserByEmail(user.getEmail())).size()>0) {

            return true;
        }
        else
            return false;

    }
}
