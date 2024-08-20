package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.EmployeeRepository;
import com.prologiccreations.traderssolution.dao.config.TeamRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Employee;
import com.prologiccreations.traderssolution.model.config.Team;
import com.prologiccreations.traderssolution.service.super_classes.config.EmployeeService;
import com.prologiccreations.traderssolution.service.super_classes.config.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {

    private final TeamRepository repository;
    private final EmployeeRepository employeeRepository;

    @Override
    public Response storeData(Team data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
//            Employee sd = employeeRepository.findById(data.getLeader().getId()).orElse(null);
//            List<Employee> members = employeeRepository.findAllById(data.getMembers().stream().map(Employee::getId).collect(Collectors.toList()));
//
//            data.setLeader(sd);
//            data.setMembers(members);
            repository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Team>> getAll(Pageable pageable) {
        Page<Team> page = repository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Team> getById(Long id) {
        Team Team = repository.findById(id).orElse(new Team());
        return new Response<>(SUCCESS, null, Team);
    }

    @Override
    public Response delete(Long id) {
        repository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Team data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Team data) {
//        boolean TeamnameExists;
//        if (data.hasId()) {
//            TeamnameExists = repository.existsByTeamname(data.getTeamname(), data.getId());
//        } else {
//            TeamnameExists = repository.existsByTeamname(data.getTeamname());
//        }
//        return TeamnameExists ? "Failed to register. Team already exists" : null;
        return null;
    }

}
