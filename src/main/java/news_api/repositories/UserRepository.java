package news_api.repositories;

import news_api.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    @Query("SELECT p from Users p where p.email = ?1")
    public List<Users> findUserByEmail(@Param("email") String email);
}
