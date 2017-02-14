package org.nr.backmir.guide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@SpringBootApplication
public class Application {
    public static void main(String args[]) {
        SpringApplication.run(Application.class, args);
    }

    @RequestMapping(value = {"/", "", "index"})
    public String index(HttpServletRequest request, HttpServletResponse response, Model model) {
        return "index";
    }

    @RequestMapping(value = "/{moduleName}/{pageName}")
    public String modulePage(@PathVariable(value = "moduleName") String moduleName, @PathVariable(value = "pageName") String pageName) {
        return moduleName + "/" + pageName;
    }

    @RequestMapping(value = "/{pageName}")
    public String page(@PathVariable(value = "pageName") String pageName) {
        return pageName;
    }
}
